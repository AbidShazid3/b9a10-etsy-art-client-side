

const Exhibitions = () => {
    return (
        <div className="mt-20">
            <h4 className="text-xl text-slate-500">CURRENT EXHIBITIONS</h4>
            <h2 className="text-5xl font-bold mt-1">Now Showing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-5">
                <div>
                    <h3 className="text-lg font-semibold">Spanish Painting: XIV-XVIII Centuries</h3>
                    <p>07 JULY - 07/09</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">English Landscape Painting</h3>
                    <p>10 JULY - 10/15</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Les Fleurs Du Mal - The French Masters</h3>
                    <p>01 AUGUST</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Nineteenth-Century Pastel Portraits</h3>
                    <p>07 AUGUST</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Rojo Y Negro - Latin American Art</h3>
                    <p>20 AUGUST</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Flemish Primitives - Netherlandish Painters</h3>
                    <p>24 AUGUST</p>
                </div>
            </div>
        </div>
    );
};

export default Exhibitions;