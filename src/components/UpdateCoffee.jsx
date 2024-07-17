import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(
      `https://coffee-store-server-kr3ukxn8k-practices-projects-15d3f04c.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "coffee inserted successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] md:p-24">
      <h2 className="font-extrabold text-3xl ">Update Coffee :{name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* row-1 name and quantity*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="coffee name"
              name="name"
              defaultValue={name}
              className="input  input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="available quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* ROW-2 supplier and taste*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="supplier"
              className="input  input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* ROW-3 category and details*/}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="category"
              name="category"
              defaultValue={category}
              className="input  input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 pl-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="details"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* ROW-4 from photo url*/}
        <div className=" mb-8">
          <div className="form-control w-full pl-4">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder=" Enter Photo URL"
              name="photo"
              defaultValue={photo}
              className="input  input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* SUBMIT BUTTON   FORM*/}
        <input
          type="submit"
          className="btn btn-block bg-red-600 text-white"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
