namespace hasA {
    interface ICamera {
        Photo(): void
    }


    class CameraType1 implements ICamera {
        Photo(): void {
            console.log("Camera Type1")
        }

    }
    class CameraType2 implements ICamera {
        Photo(): void {
            console.log("Camera Type2")
        }

    }
    class CameraType3 implements ICamera {
        Photo(): void {
            console.log("Camera Type3")
        }
    }

    abstract class BasePhone {
        public _camera: ICamera;
        constructor(camera: ICamera) {
            this._camera = camera;
        }

        Call(): void {
            console.log("arama yapıldı")
        }
        Photo(): void {
            this._camera.Photo();
        }
    }

    class IPhone extends BasePhone {

    }
    class Nokia extends BasePhone {

    }

    class Samsung extends BasePhone {

    }
    var phone = new IPhone(new CameraType1());
    phone.Photo();
}
