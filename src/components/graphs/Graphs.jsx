import { PieChart, Pie, Cell, Legend  } from 'recharts';
import './graphs.scss'
import { useState } from 'react';

const data = [
    { name: 'Delivered', value: 500 },
    { name: 'Out for delivery', value: 400 },
    { name: 'Intransit', value: 300 },
    { name: 'Pending', value: 200 },
    { name: 'Exception', value: 100 },
];

const STATUS_COLORS = {
    Delivered: '#0088FE',
    'Out for delivery': '#00C49F',
    Intransit: '#FFBB28',
    Pending: '#FF8042',
    Exception: '#DAA06D',
};

const Graphs = () => {
    const [selected, setSelected] = useState("All");

    const handleButtonClick = (status) => {
        setSelected(status);
    };
    const filteredData = selected === "All"
        ? data
        : data.filter(item => item.name === selected);
    return (
        <div className="graph_container">
            <div className="top">
                <span>Shipment Updates</span>
                <span>Total Orders:  {filteredData.reduce((acc, item) => acc + item.value, 0)}</span>
            </div>
            <div className="status">
                {["All", "Delivered", "Out for delivery", "Intransit", "Pending", "Exception"].map((status) => (
                    <button
                        key={status}
                        className={selected === status ? "selected" : "default"}
                        onClick={() => handleButtonClick(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>
            <div className="chart">
            <PieChart width={500} height={300}>
                <Pie
                    data={filteredData}
                    cx={100}
                    cy={100}
                    innerRadius={30}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={false}
                    label={(entry) => `${entry.value}`}
                >
                    {filteredData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name]} />
                    ))}
                </Pie>
                <Legend
                    layout="vertical"
                    align="left"
                    verticalAlign="middle"
                />
            </PieChart>
            </div>
            
        </div>
    );
};

export default Graphs;
