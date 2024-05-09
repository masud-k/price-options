import { LineChart, Line } from 'recharts';

const Charts = () => {

    const studentMarks = [
        { student: 1, math: 85, science: 78, english: 90 },
        { student: 2, math: 70, science: 82, english: 75 },
        { student: 3, math: 92, science: 88, english: 85 },
        { student: 4, math: 78, science: 80, english: 79 },
        { student: 5, math: 85, science: 75, english: 88 },
        { student: 6, math: 65, science: 72, english: 70 },
        { student: 7, math: 90, science: 85, english: 92 },
        { student: 8, math: 82, science: 90, english: 85 },
        { student: 9, math: 88, science: 76, english: 80 },
        { student: 10, math: 75, science: 78, english: 72 }
    ];


    return (
        <div>
            <LineChart width={500} height={400} data={studentMarks}>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="science" stroke="#82ca9d" />
                <Line type="dashed" dataKey="english" stroke="#82c38c" />
            </LineChart>
        </div>
    );
};

export default Charts;