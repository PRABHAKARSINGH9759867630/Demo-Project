
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-school-primary font-heading">GD Goenka</span>
        <span className="text-school-accent font-heading"> Rudrapur</span>
      </span>
    </Link>
  );
};

export default Logo;
