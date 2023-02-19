export default function Contact() {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen ">
      <h1 className="text-2xl font-bold text-center p-4">
        Skontaktuj się ze mną
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Imię"
          />
          <input
            type="email"
            placeholder="Email"
            className="border shadow-lg p-3"
          />
        </div>
        <input
          type="text"
          placeholder="subject"
          className="border shadow-lg p-3 w-full my-2"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Wpisz wiadomość"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Wyślij</button>
      </form>
    </div>
  );
}
