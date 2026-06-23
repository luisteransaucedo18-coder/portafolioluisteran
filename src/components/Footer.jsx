import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer>
      <span>{profile.name}</span> - {profile.location} - {new Date().getFullYear()}
      <span>Disenado y desarrollado con React</span>
    </footer>
  );
}
