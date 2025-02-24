import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";
const Ejercicio2 = () => {
    const images = [
        "https://i.pinimg.com/736x/60/77/62/607762d116723c84671e590aaf5461e3.jpg",
        "https://i.pinimg.com/736x/a2/4f/6a/a24f6ab4a6d6abe628a6acbb344aeaae.jpg",
        "https://i.pinimg.com/736x/dc/c1/a3/dcc1a320b0790a46639f3f4b7ff3b01f.jpg",
    ];
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Ejercicio 2: Lazy
                Loading en Imágenes</h1>
            <p className="mb-4">
                Las siguientes imágenes solo se cargarán cuando sean visibles
                en la pantalla.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center">
                        <TestEjercicio2/>
            </div>
        </div>
    );
};
export default Ejercicio2;