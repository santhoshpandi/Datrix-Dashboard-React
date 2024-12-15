export default function Layout(){
  return(
    <>
      <div className="container mx-auto p-6 space-y-8 dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl  font-bold text-center text-green-600 select-none">Responsive Layout Examples</h2>

      <section className="space-y-6 dark:text-white">
        <h3 className="text-2xl font-semibold text-green-600 ">Mobile Layout</h3>
        <p className="text-gray-600">This is how the layout will appear on a mobile device. The content is stacked vertically and takes up the full screen width.</p>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x800.png?text=Mobile+Layout"
            alt="Mobile Layout"
            className="w-full max-w-xs"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-green-600">Tablet Layout</h3>
        <p className="text-gray-600">On tablets, the layout might have two columns or more, depending on the screen size. The content begins to spread out horizontally.</p>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/800x600.png?text=Tablet+Layout"
            alt="Tablet Layout"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-green-600">PC Layout</h3>
        <p className="text-gray-600">On desktop PCs, the layout can be spread across several columns with more horizontal space and larger content areas.</p>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/1200x600.png?text=PC+Layout"
            alt="PC Layout"
            className="w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-green-600">Layout Explanation</h3>
        <p className="text-gray-600">Responsive design allows the content of a page to adapt to different screen sizes. Below are the typical screen size breakpoints:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-gray-600">
            <strong>Mobile:</strong> Devices with a screen width of less than 640px.
          </li>
          <li className="text-gray-600">
            <strong>Tablet:</strong> Devices with a screen width between 640px and 1024px.
          </li>
          <li className="text-gray-600">
            <strong>PC/Desktop:</strong> Devices with a screen width greater than 1024px.
          </li>
        </ul>
        <p className="text-gray-600">
          TailwindCSS makes it easy to implement these breakpoints with responsive utilities such as <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code> for mobile, tablet, and desktop sizes respectively.
        </p>
      </section>

    </div>
    </>
  )
}