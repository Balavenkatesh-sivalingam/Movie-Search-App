

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-12 px-4">

      <div className="bg-gradient-to-br from-gray-900 via-red-700 to-gray-600 shadow-2xl rounded-2xl p-10 max-w-5xl w-full mt-10 text-white">
        <h2 className="text-4xl font-extrabold mb-8 border-b-4 border-red-300 pb-4">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> Balavenkatesh S
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:vashbala@gmail.com"
                className="underline hover:text-gray-200"
              >
                vashbala@gmail.com
              </a>
            </p>
            <p>
              <strong>Mobile:</strong> 7373878201
            </p>
            <div>
              <h3 className="font-semibold text-xl mb-1">Location</h3>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/balavenkatesh-s-705567220"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200"
              >
                linkedin.com/in/balavenkatesh-s-705567220
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Balavenkatesh-sivalingam"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200"
              >
                github.com/Balavenkatesh-sivalingam
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
