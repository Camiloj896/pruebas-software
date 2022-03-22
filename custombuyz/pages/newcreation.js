import NewCreationForm from "../components/NewCreactionForm";

const NewCreation = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex justify-center flex-col items-center">
          <NewCreationForm />
        </div>
        <div className="bg-black hidden lg:block">dsfdsf</div>
      </div>
    </>
  );
};

export default NewCreation;
