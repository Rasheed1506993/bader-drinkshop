
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Product } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, { message: 'اسم المنتج يجب أن يكون أكثر من حرفين' }),
  category: z.string().min(1, { message: 'يرجى اختيار الفئة' }),
  image: z.string().min(1, { message: 'يرجى إدخال رابط الصورة' }),
  description: z.string().min(5, { message: 'الوصف يجب أن يكون أكثر من 5 أحرف' }),
  size: z.string().min(1, { message: 'يرجى إدخال الحجم' }),
  origin: z.string().min(1, { message: 'يرجى إدخال بلد المنشأ' }),
  available: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  product?: Product;
  categories: string[];
  onSave: (product: Product) => void;
}

const ProductForm = ({ product, categories, onSave }: ProductFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = !!product;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: product || {
      name: '',
      category: '',
      image: '',
      description: '',
      size: '',
      origin: '',
      available: true,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // If it's a new product, generate a new ID
      if (!isEditMode) {
        // In a real app, this would be handled by the backend
        // For this demo, we'll just generate a random ID
        values.id = Math.floor(Math.random() * 10000);
      }
      
      onSave(values as Product);
      toast.success(isEditMode ? 'تم تحديث المنتج بنجاح' : 'تم إضافة المنتج بنجاح');
      navigate('/products');
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('حدث خطأ أثناء حفظ المنتج');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 dir-rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم المنتج</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسم المنتج" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الفئة</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رابط الصورة</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل رابط الصورة" {...field} />
                </FormControl>
                <FormDescription>
                  مسار الصورة من مجلد المشروع (مثال: /lovable-uploads/image.png)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الحجم</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل حجم المنتج" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>بلد المنشأ</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل بلد المنشأ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-badr-gold focus:ring-badr-gold"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
                <div className="space-y-1 leading-none mr-3">
                  <FormLabel>متوفر</FormLabel>
                  <FormDescription>
                    حدد هذا الخيار إذا كان المنتج متوفرًا للطلب
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>وصف المنتج</FormLabel>
              <FormControl>
                <Textarea placeholder="أدخل وصف المنتج" {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4 space-x-reverse">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => navigate('/products')}
            className="ms-4"
          >
            إلغاء
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'جاري الحفظ...' : isEditMode ? 'تحديث المنتج' : 'إضافة منتج'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
