

export const register_user = async (formData) => {
    try {
        const res = await fetch('https://intelicity-nxmeta.vercel.app/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
                'API-Key' : process.env.DATA_API_KEY
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return error.message
    }
};


export const login_user = async (formData) => {
    try {
        const res = await fetch('https://intelicity-nxmeta.vercel.app/api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
                'API-Key' : process.env.DATA_API_KEY
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};