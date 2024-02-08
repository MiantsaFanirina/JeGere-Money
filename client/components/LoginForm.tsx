"use client"

function LoginForm ({formAction}: {formAction: any}) 
{

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const res = await formAction(formData)
    if(res.register)
    {
      localStorage.setItem('authToken', res.register)
    }
    else {
      console.log(res)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl uppercase tracking-wide font-semibold mb-16">Login to JeGère</h1>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="email" id="mail" name="mail" placeholder=" " className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="mail" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
        </div>
      </div>
      <div className="container w-full px-6 mb-6">
        <div className="relative float-label-input">
            <input type="password" id="password" name="password" placeholder=" " className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
            <label htmlFor="password" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Password</label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2 mx-6 py-2 rounded">Login</button>
    </form>
  )
}

export default LoginForm;