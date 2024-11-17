import Ckeditor from "../Ckeditor/ckeditor";
import TextFieldWithDropdown from "../Essentials/TextFieldWithDropdown";

function addArticle() {
  return (
    <>
      {/* Category and sub-category for Learning Content */}
      <div className="mt-5 flex gap-x-14">
        <div className="flex justify-start items-start flex-col gap-y-1">
          <label htmlFor="Category" className="pl-1 text-base">
            Category:
          </label>
          <TextFieldWithDropdown id="Category" name="Category" />
        </div>
        <div className="flex justify-start items-start flex-col gap-y-1">
          <label htmlFor="Sub-Category" className="pl-1 text-base">
            Sub-Category:
          </label>
          <TextFieldWithDropdown id="Sub-Category" name="Sub-Category" />
        </div>
      </div>

      {/* Section and sub-section for Learning Content */}
      <div className="mt-6 flex gap-x-14">
        <div className="flex justify-start items-start flex-col gap-y-1">
          <label htmlFor="Section" className="pl-1 text-base">
            Section:
          </label>
          <TextFieldWithDropdown id="Section" name="Section" />
        </div>
        <div className="flex justify-start items-start flex-col gap-y-1">
          <label htmlFor="Sub-Section" className="pl-1 text-base">
            Sub-Section:
          </label>
          <TextFieldWithDropdown id="Sub-Section" name="Sub-Section" />
        </div>
        <div className="mt-[1.70rem]">
          <button className="w-20 h-10 bg-[#5652B7] rounded text-white hover:bg-[#6461BD] shadow-md text-base">
            Save
          </button>
        </div>
      </div>

      {/* Description for Learning Content */}
      <div className="mt-10 flex flex-col gap-y-1">
        <label htmlFor="Description" className="pl-1 text-base">
          Description:
        </label>
        <Ckeditor />
      </div>
    </>
  );
}

export default addArticle;
