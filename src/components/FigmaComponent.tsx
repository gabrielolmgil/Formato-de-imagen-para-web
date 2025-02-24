const FigmaComponent = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold">Diseño Exportado de
                Figma</h2>
            <p className="text-gray-600">Este componente fue diseñado en
                Figma y convertido en React.</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
                ¡Haz clic aquí!
            </button>
            <div className="flex flex-col bg-[#FFFFFF]">
			<div className="self-stretch h-[505px]">
				<div className="flex flex-col items-start self-stretch bg-[#D9D9D9] pt-[264px] pb-[193px]">
					<span className="text-[#000000] text-[48px] ml-[200px]" >
						{"Prueba"}
					</span>
				</div>
			</div>
		</div>
                
        </div>
    );
};
export default FigmaComponent;