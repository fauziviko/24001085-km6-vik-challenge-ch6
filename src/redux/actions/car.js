import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCar(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/");
    }
};

export const addCar =
    (navigate, setIsLoading, name, spec_id, rentPerDay, size, image) =>
        async (dispatch, getState) => {
            const { token } = getState().auth;
            // make loading
            setIsLoading(true);

            let data = new FormData();
            data.append('name', name);
            data.append('spec_id', spec_id);
            data.append('rentPerDay', rentPerDay);
            data.append('size', size);
            if (image) {
                data.append("image", image);
            }

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_BACKEND_API}/api/cars/`,
                headers: {
                    Authorization: `Bearer ${token} `,
                },
                data: data
            };

            try {
                const response = await axios.request(config);
                console.log(JSON.stringify(response.data));
                toast.success("Car added successfully!");
                navigate("/");
                

            }
            catch (error) {
                toast.error(error?.response?.data?.message);
                // redirect to home
                navigate("/");
            }
            setIsLoading(false);
        };

export const updateCar = (id, navigate, setIsLoading, name, spec_id, rentPerDay, size, image) => async (dispatch, getState) => {
            const { token } = getState().auth;
            setIsLoading(true);
        
            let data = new FormData();
            data.append('name', name);
            data.append('spec_id', spec_id);
            data.append('rentPerDay', rentPerDay);
            data.append('size', size);
            if (image) {
                data.append("image", image);
            }
        
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: data
            };
        
            try {
                const response = await axios.request(config);
                console.log(JSON.stringify(response.data));
                toast.success("Car updated successfully!");
                navigate("/");
            } catch (error) {
                toast.error(error?.response?.data?.message);
                navigate("/");
            }
            setIsLoading(false);
        };
        
export const deleteCar = (id, navigate) => async (dispatch, getState) => {
            const { token } = getState().auth;
        
            let config = {
                method: "delete",
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
        
            try {
                const response = await axios.request(config);
                console.log(JSON.stringify(response.data));
                toast.success("Car deleted successfully!");
                setTimeout(()=>{
                    navigate(0);
                },1000)
            }
            catch (error) {
                toast.error(error?.response?.data?.message);
                setTimeout(()=>{
                    navigate(0);
                },1000)
            }
        };
        