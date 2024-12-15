


export default function Plan(){
  return(
    <div className="p-5  flex flex-wrap gap-4 justify-center dark:bg-slate-800 dark:text-white plan">
      <p className="text-center text-gray-600"><strong>Basic Plan:</strong> A great starting plan for individuals or small teams. Get basic features with unlimited access and easy payment options.</p>
      <p className="text-center text-gray-600"><strong>Advanced Plan:</strong> Perfect for growing teams. Get additional features, priority support, and more login options.</p>

      <p className="text-center text-gray-600"><strong>Pro Plan:</strong> The ultimate plan for large teams or enterprises. Get unlimited logins, premium support, and fully customizable features tailored to your needs.</p>

      <div id="basic" className="shadow-md shadow-slate-600  rounded-md h-[350px] flex flex-col basis-[50%] flex-grow max-w-[300px] justify-between">
        <section className="text-white bg-green-600 py-3 text-center text-[25px] rounded-t-md">Basic</section>
          <ol className="text-xl" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className="mb-3 w-[80%] mx-auto">Limited Access</li>
            <li className="mb-3 w-[80%] mx-auto">Upto 1 Login</li>
            <li className="mb-3 w-[80%] mx-auto">Pay option Not Available</li>
          </ol>
        <section className="bg-slate-800 py-4  dark:bg-slate-900 text-white text-center rounded-b-md text-[20px]">₹549/month</section>
      </div>
      <div id="advanced" className="shadow-md shadow-slate-600  rounded-md h-[350px] flex flex-col basis-[50%] flex-grow max-w-[300px] justify-between">
        <section className="text-white bg-green-600 py-3 text-center text-[25px] rounded-t-md">Advanced</section>

          <ol className="text-xl" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className="mb-3 w-[80%] mx-auto">Unlimited Access</li>
            <li className="mb-3 w-[80%] mx-auto">Upto 3 Login</li>
            <li className="mb-3 w-[80%] mx-auto"> Pay option Available</li>
          </ol>

        <section className="bg-slate-800 dark:bg-slate-900 py-4 text-white text-center rounded-b-md text-[20px]">₹799/month</section>
      </div>
      <div id="pro" className="shadow-md shadow-slate-600  rounded-md h-[350px] flex flex-col basis-[50%] flex-grow max-w-[300px] justify-between">
        <section className="text-white bg-green-600 py-3 text-center text-[25px] rounded-t-md">Pro</section>

          <ol className="text-xl" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li className="mb-3 w-[80%] mx-auto">Unlimited Access</li>
            <li className="mb-3 w-[80%] mx-auto">Upto 12 Login</li>
            <li className="mb-3 w-[80%] mx-auto">Easy Pay option Available</li>
          </ol>

        <section className="bg-slate-800 py-4 dark:bg-slate-900 text-white text-center rounded-b-md text-[20px]">₹999/month</section>
      </div>
    </div>
  )
}