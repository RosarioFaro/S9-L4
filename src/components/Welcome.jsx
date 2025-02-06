import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      {["warning"].map((variant) => (
        <Alert key={variant} variant={variant}>
          <p className="text-center fw-bold">
            Welcome to TheFantasyCorner! ✨ Dive into magical worlds full of adventure, mythical creatures, and
            legendary heroes. Find your next great read and let your imagination soar! Explore, dream, and discover your
            next adventure!
          </p>
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
