import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../components/store/reducers/Products";
import { addToRekapPenjualan } from "../components/store/reducers/Products";
import { useSelector, useDispatch } from "react-redux";

const useHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, isLoading, rekapPenjualan } = useSelector(
        (state) => state.products
    );
    const { user } = useSelector((state) => state.login);

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    admin: false,
                    token: null,
                    username: null,
                    password: null,
                })
            );
        }
        if (user?.admin === true) {
            navigate("/admin");
        }
        if (rekapPenjualan.length < 1) {
            if (!localStorage.getItem("rekapPenjualan")) {
                return;
            }
            dispatch(
                addToRekapPenjualan(
                    JSON.parse(localStorage.getItem("rekapPenjualan"))
                )
            );
        }
    }, []);

    useEffect(() => {
        if (!localStorage.getItem("products")) {
            dispatch(getProducts());
        } else {
            const data = JSON.parse(localStorage.getItem("products"));
            dispatch(getProducts(data));
        }
    }, [dispatch]);

    console.log(products);
    return { products, isLoading, rekapPenjualan, user };
};

export default useHome;
