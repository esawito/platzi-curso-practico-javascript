const coupons = [
    {
        name: "nuevo",
        discount: 30
    },
    {
        name: "frecuente",
        discount: 10
    },
    {
        name: "recomendado",
        discount: 15
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento =(precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

function getDiscount() {
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
        alert(`El cupón ${couponValue} no es valido`);
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText =`El precio con descuento son: ${precioConDescuento}`;
    }
}

