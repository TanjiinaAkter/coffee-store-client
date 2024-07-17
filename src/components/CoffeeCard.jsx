import { FaEye } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-kr3ukxn8k-practices-projects-15d3f04c.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });

        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        console.log("confirm");
      }
    });
  };
  return (
    <div className="card md:card-side bg-base-100 mb-6 shadow-xl">
      <figure className=" p-7">
        <img src={photo} className="md:w-[10rem] md:h-[7rem]" alt="Movie" />
      </figure>
      <div className="flex justify-between w-full mx-3 ">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4 my-[0.5rem] mx-[2rem]">
            <button className="btn join-item rounded-full bg-[#D2B48C] ">
              <FaEye className="text-white text-xl" />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item  rounded-full bg-[#D2B48C] ">
                <MdOutlineModeEdit className="text-white text-xl" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item  rounded-full bg-red-500">
              <MdDeleteOutline className="text-white  text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
