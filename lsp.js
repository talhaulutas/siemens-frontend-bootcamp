class BasePhone {
    call() {
        console.log("arama yapıldı");
    }
}
class IPhone12 extends BasePhone {
    takePhoto() {
        console.log("fotoğraf çekildi");
    }
}
class Nokia extends BasePhone {
    takePhoto() {
        throw new Error("fotoğraf çekme özelliği yok");
    }
}
let phone;
phone = new IPhone12();
phone.call();
if (phone instanceof IPhone12) {
    phone.takePhoto();
}
phone = new Nokia();
