import React, { useState, useRef, useEffect } from "react";
import CustomTabs from "../../../shared/customTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../hooks/useTypedSelector";
import { CircularProgress } from "@mui/material";
// import Select from "../../ui/customSelect";
// import Switch from "../../ui/switch";
import Input from "../../../shared/customInput";
import {
  uploadProfilePic,
  getUserInfo,
} from "../../../../redux/features/users/userSlice";

import styles from "./styles.module.scss";
// import DashboardCard from "../../ui/cards/dashboardCard";
// import Modal from "../../ui/modal";
// import BlueEye from "../../../public/images/eyeblue.svg";
// import Bank from "../../../public/images/bank.svg";
// import Bell from "../../../public/images/bell.svg";
// import CreditCard from "../../../public/images/credit-card.svg";
// import Lock from "../../../public/images/lock.svg";
// import Person from "../../../public/images/person.svg";
// import Shield from "../../../public/images/shield.svg";

const SettingsContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.userData);
  console.log("Definitely user? data...", user);
  const imageInput = useRef<HTMLInputElement>(null);
  const [tabIndex, setTabIndex] = useState(1);
  const tabIndexHandler = (index: number) => {
    setTabIndex(index);
  };
  const [activeTab, setActiveTab] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);
  const [image, setImage] = useState("");
  // const [file, setFile] = useState<File | null>(null);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const uploadProfilePicture = async (target: HTMLInputElement) => {
    const file = target.files?.[0];
    console.log("File is here, looo...", file);
    if (file) {
      if (
        file.size / 1000 < 500 &&
        (file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg")
      ) {
        setProcessing(true);
        try {
          const formData = new FormData();
          formData.append("picture", file);
          await dispatch(uploadProfilePic(formData)).unwrap();
          await dispatch(getUserInfo());
        } catch (err) {
          console.log(err);
        } finally {
          setProcessing(false);
        }
      } else {
        // setOpenModal2(true);
        setProcessing(false);
      }
    }
  };

  useEffect(() => {
    if (user?.profile?.picture) {
      setImage(user?.profile.picture);
    }
  }, [user]);

  const tabHeaders = [
    {
      name: "Profile Settings",
      icon: "/images/person.svg",
      id: 1,
    },
    {
      name: "Orders",
      icon: "/images/credit-card.svg",
      id: 2,
    },
    {
      name: "Order Tracking",
      icon: "/images/bank.svg",
      id: 3,
    },
    {
      name: "Wishlist",
      icon: "/images/bell.svg",
      id: 4,
    },
    {
      name: "Change Password",
      icon: "/images/lock.svg",
      id: 5,
    },
    // {
    //   name: "2FA Settings",
    //   icon: "/images/shield.svg",
    //   id: 6,
    // },
  ];

  return (
    <section className={styles.settings}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <CustomTabs
              activeTab={activeTab}
              clicked={handleTabClick}
              // clicked={(index) => tabIndexHandler(index)}
              headers={tabHeaders}
              // src='../../../public/images/person.svg'
              // src={tabHeaders}
              // src="/images/send-icon.svg"
            />
          </div>
          <div className={styles.right}>
            {activeTab === 1 && (
              <div className={styles.content}>
                <h3>Profile settings</h3>

                <div className={`${styles.profilePix}`}>
                  {user?.profile.picture ? (
                    <img
                      width="100%"
                      style={{ borderRadius: "2%", objectFit: "cover" }}
                      height="100%"
                      src={`http://localhost:4040/${image}`}
                      alt=""
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`${styles.userIcon}`}
                    />
                  )}
                  <input
                    hidden
                    ref={imageInput}
                    type="file"
                    accept=".jpeg, .png, .jpg"
                    // onChange={uploadProfilePicture}
                    onChange={(e) => uploadProfilePicture(e.target)}
                  />
                  {/* </div> */}
                </div>
                <div className={`${styles.profileBtnUpload}`}>
                  <button
                    // variant="contained"
                    // fullWidth
                    // color="primary"
                    style={{
                      boxShadow: "none",
                      marginBottom: "10px",
                      height: "50px",
                    }}
                    onClick={() => imageInput.current?.click()}
                  >
                    {processing ? (
                      <CircularProgress size={20} style={{ color: "#fff" }} />
                    ) : user?.profile.picture ? (
                      "Update Photo"
                    ) : (
                      "Upload Photo"
                    )}
                    {/* {user?.profile.picture ? "Update Photo" : "Upload Photo"} */}
                  </button>
                </div>

                <form>
                  <div className={`${styles.formGrid}`}>
                    <div className={styles.formGroup}>
                      <Input
                        id="title"
                        name="title"
                        labelText="Title"
                        placeholder="Title"
                        // children={<BlueEye />}
                        innerLabel="Title"
                        clicked={() => {
                          console.log("Hello inner-label clicked");
                        }}
                        value={user?.profile.title ? user?.profile.title : ""}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="first_name"
                        name="first name"
                        labelText="First Name"
                        placeholder="First Name"
                        // children={<BlueEye />}
                        innerLabel="First Name"
                        clicked={() => {
                          console.log("Hello inner-label clicked");
                        }}
                        value={
                          user?.profile.first_name
                            ? user?.profile.first_name
                            : ""
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="last_name"
                        name="last name"
                        labelText="Last Name"
                        placeholder="Last Name"
                        value={
                          user?.profile.last_name ? user?.profile.last_name : ""
                        }
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Input
                        id="acct_id"
                        name="acct_id"
                        labelText="Account ID"
                        placeholder="Account ID"
                        value={user?.acct_id}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="email"
                        name="email"
                        labelText="Email"
                        placeholder="Email"
                        value={user?.email}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="phone_number"
                        name="phone number"
                        labelText="Phone Number"
                        placeholder="Phone Number"
                        value={user?.profile.phone ? user?.profile.phone : ""}
                      />
                    </div>

                    <button
                      className="btn-primary btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Update
                    </button>
                  </div>

                  {/* <div className={`${styles.formGrid}`}></div>
                  <div className={styles.formGrid}></div> */}
                </form>
              </div>
            )}
            {activeTab === 2 && (
              <div className={styles.content}>
                <h3>Card settings</h3>
                <div className={styles.cardWrapper}>
                  <div className={styles.atmCard1}>
                    <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
                    <span> 9877 </span>
                    <h4>Obinna Ani</h4>
                    <div className={styles.expiryDelete}>
                      <div className={styles.date}>
                        <small>MONTH/YEAR</small>
                        <p>02 / 24</p>
                      </div>
                      <img src="/images/trash.svg" alt="" />
                    </div>
                  </div>

                  <div className={styles.atmCard2}>
                    <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
                    <span> 9877 </span>
                    <h4>Obinna Ani</h4>
                    <div className={styles.expiryDelete}>
                      <div className={styles.date}>
                        <small>MONTH/YEAR</small>
                        <p>02 / 24</p>
                      </div>
                      <img src="/images/trash.svg" alt="" />
                    </div>
                  </div>

                  <div className={styles.submitBtn}>
                    <button
                      className="btn-transparent-dark btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Add New Card
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className={styles.content}>
                <h3>Bank settings</h3>
                <div className={styles.cardWrapper}>
                  <div className={styles.bankCard}>
                    <img src="/images/AccessBank.svg" alt="" />

                    <div className={styles.bankDetailDelete}>
                      <div className={styles.bankDetail}>
                        <h4>Obinna Ani</h4>
                        <h5>Access Bank</h5>
                        <p>0237835648</p>
                      </div>
                      <div className={styles.expiryDelete}>
                        <img src="/images/trash-black.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.bankCard}>
                    <img src="/images/GTBank.svg" alt="" />

                    <div className={styles.bankDetailDelete}>
                      <div className={styles.bankDetail}>
                        <h4>Obinna Ani</h4>
                        <h5>Access Bank</h5>
                        <p>0237835648</p>
                      </div>
                      <div>
                        <img src="/images/trash-black.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.submitBtn}>
                    <button
                      className="btn-transparent-dark btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Add New Bank Account
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div className={styles.content}>
                {/* <h3>Notifications</h3>
                <div className={styles.notifWrapper}>
                  <div className={styles.notifSwitch}>
                    <h4>Referal Notification</h4>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className={styles.notifSwitch}>
                    <h4>New Investment Notification</h4>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className={styles.notifSwitch}>
                    <h4>In-App Notification</h4>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className={styles.notifSwitch}>
                    <h4>Investment Maturity Notification</h4>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className={styles.submitBtn}>
                    <button
                      className="btn-primary btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </div> */}
              </div>
            )}
            {activeTab === 5 && (
              <div className={styles.content}>
                <h3>Change Password</h3>

                <form>
                  <div className={`${styles.formGrid}`}>
                    <div className={styles.formGroup}>
                      <Input
                        id="old_password"
                        name="old password"
                        labelText="Old Password"
                        placeholder="Old Password"
                        // value='Peter Ihimire'
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="old_password"
                        name="old password"
                        labelText="New Password"
                        placeholder="New Password"
                        // value='Peter Ihimire'
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <Input
                        id="old_password"
                        name="old password"
                        labelText="Confirm New Password"
                        placeholder="Confirm New Password"
                        // value='Peter Ihimire'
                      />
                    </div>

                    <button
                      className="btn-primary btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* {activeTab === 6 && (
              <div className={styles.content}>
                <h3>2FA Settings</h3>

                <form>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Set Security Question"
                      placeholder="Set Security Question"
                      // value='Peter Ihimire'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Enter Answer"
                      placeholder="Enter Answer"
                      // value='Peter Ihimire'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText="Comfirm Password"
                      placeholder="Comfirm Password"
                      // value='Peter Ihimire'
                    />
                  </div>

                  <div className={styles.submitBtn}>
                    <button
                      className="btn-primary btn-block"
                      // onClick={stepHandler}
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsContent;
