import { formatDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Alfaz Ahmed
          </span>
        </h3>
        <p className="text__para">
          Dr. Alfaz Ahmed is a highly experienced and accomplished physician
          with over two decades of experience in the field of medicine,
          specializing
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="pt-4 md:p-5">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("09-18-2021")} - Present
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Senior Vice Precient of Cardiolgy Depertment & <br />Senior Most Cardiogy Surgon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            DownTown, Stanford, USA
            </p>
          </li>

        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("1-4-2017")} - {formatDate("09-15-2021")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                HOD of Cardiology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            DownTown, Stanford, USA
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("02-4-2011")} - {formatDate("12-31-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Senior Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            Hidelston , Californina, USA
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("10-10-2007")} - {formatDate("12-31-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Junior Surgon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Hidelston , Californina, USA
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("02-4-2003")} - {formatDate("06-30-2007")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appolo, NewYork, USA
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("5-15-2000")} - {formatDate("12-04-2002")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                High School In Bustoon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appolo, NewYork, USA
            </p>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default DoctorAbout;
