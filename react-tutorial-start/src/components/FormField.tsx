

const FormField = () => {
    // const handleClick = (): void =>{
    //     alert('You clicked button')
    // }
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        console.log(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form submitted!");
    };
      

    return (
        <section className="">
            <form onSubmit={handleFormSubmit}>
                <h1 className="text-bold mb-4">Typical Form</h1>
                <input type="text" className="border block mb-[0.5rem]" onChange={handleFormChange}/>
                <button type="submit" className="border-2 p-[0.5rem] cursor-pointer">Click Me</button>
            </form>
        </section>
    );
}

export default FormField