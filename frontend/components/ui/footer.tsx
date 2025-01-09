// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-background text-white py-8 mt-12 shadow-lg rounded-lg">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-xl font-semibold mb-4">Made by Team Boche</p>
          <p className="text-sm text-accent mb-6">
            <span className="font-semibold">Team Members: </span>
            <a
              href="https://www.linkedin.com/in/kumarayushsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition duration-300"
            >
              Ayush Kumar Singh
            </a>,{" "}
            <a
              href="https://www.linkedin.com/in/anupriyamshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition duration-300"
            >
              Anupriyam Shukla
            </a>,{" "}
            <a
              href="https://www.linkedin.com/in/harsh-gupta-638445314"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition duration-300"
            >
              Harsh Gupta
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  