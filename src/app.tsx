import { Theme, useTheme } from 'hooks/useTheme';

const App = () => {
  useTheme(Theme.UobMsig);

  return (
    <div className="d-flex justify-content-center mt-4">
      <h5>
        Hello, you can edit this container for your development. Happy coding!
        :)
      </h5>
    </div>
  );
};

export default App;
