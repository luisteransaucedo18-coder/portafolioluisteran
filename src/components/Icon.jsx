import {
  Atom,
  ClipboardCheck,
  Code2,
  Database,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  Users,
  Wrench,
  X,
} from 'lucide-react';

const icons = {
  Atom,
  ClipboardCheck,
  Code2,
  Database,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  Users,
  Wrench,
  X,
};

export function Icon({ name, size = 20, strokeWidth = 2, ...props }) {
  const Component = icons[name];

  if (!Component) return null;

  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} {...props} />;
}
