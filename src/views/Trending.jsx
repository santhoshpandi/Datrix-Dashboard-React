const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Dummy data for random images and table
const imageUrls = [
  'https://picsum.photos/200?ds',
  'https://picsum.photos/200?dss',
  'https://picsum.photos/200?dsa',
  'https://picsum.photos/200?dsd',
  'https://picsum.photos/200?dsas',
  'https://picsum.photos/200?dsdf',
];

const generateRandomTableData = () => {
  const rows = getRandomNumber(3, 5);
  const columns = ['Name', 'Age', 'City'];

  let tableData = [];
  for (let i = 0; i < rows; i++) {
    tableData.push([
      `Person ${i + 1}`,
      getRandomNumber(18, 50),
      ['Chennai', 'Mumbai', 'Kashmir', 'West Bengal', 'Cochin'][getRandomNumber(0, 4)],
    ]);
  }

  return { columns, tableData };
};


export default function Content2(){

  const { columns, tableData } = generateRandomTableData();
  return(
    <div className="dark:bg-slate-800 dark:text-white">
    <div className="container mx-auto p-6 space-y-8">
       {/* Random Table */}
       <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-sm dark:shadow-white">
        <table className="min-w-full table-auto border-collapse text-sm dark:text-white">
          <thead>
            <tr className=" text-white  bg-green-600">
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 text-left text-white font-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-t text-white">
                {row.map((cell, i) => (
                  <td key={i} className="px-4 py-2 text-black dark:text-white">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Random Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={url} alt="Random" className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>

     
    </div>
    </div>
  )
}