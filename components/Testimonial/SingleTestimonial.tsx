import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ review }: { review: any }) => {
  const { name, rating, review: content } = review;

  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 border-b border-stroke pb-6 dark:border-strokedark">
        <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
          {name}
        </h3>
        <p className="text-yellow-500">
          {"★".repeat(rating)}{" "}
          <span className="text-gray-400">
            {"☆".repeat(5 - rating)}
          </span>
        </p>
      </div>

      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
