export async function registerProcessor(formData: FormData) {
    "use server"
    const username = formData.get('username')?.toString()
    const mail = formData.get('mail')?.toString().toLowerCase()
    const password = formData.get('password')

    const dataObj = {
        username: username,
        email: mail,
        password: password
    }

    console.log(dataObj)

    const data = await fetch(`${process.env.BACKEND_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })

    if (data.ok) {
        const responseData = await data.json();
        return responseData
    } else {
        return console.error('Failed to register:', data.statusText);
    }
}


export async function loginProcessor(formData: FormData) {
    "use server"
    const mail = formData.get('mail')?.toString().toLowerCase()
    const password = formData.get('password')

    const dataObj = {
        email: mail,
        password: password
    }

    const data = await fetch(`${process.env.BACKEND_URL}/users/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })
    if (data.ok) {
        const responseData = await data.json();
        return responseData
    } else {
        return console.error('Failed to login:', data.statusText);
    }
}