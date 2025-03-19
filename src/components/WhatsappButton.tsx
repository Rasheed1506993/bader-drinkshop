
import { MessageCircle } from 'lucide-react';

interface WhatsappButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsappButton = ({ 
  phoneNumber, 
  message = '', 
  className = '',
  children
}: WhatsappButtonProps) => {
  // Format phone number by removing any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-badr-gold hover:bg-badr-dark-gold text-black font-medium rounded-full py-3 px-6 transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      {children || 'طلب المنتج'}
      <MessageCircle size={20} />
    </a>
  );
};

export default WhatsappButton;
