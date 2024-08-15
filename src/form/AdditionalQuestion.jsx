import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdditionalQuestion = () => {
  let navigate = useNavigate();
  let [additionalquestion, setAdditionalQuestion] = useState({
    profession: "",
    interests: "",
    reference: "",
  });

  let navToEnteredDetails = () => {
    if (
      additionalquestion?.profession === "" ||
      additionalquestion?.interests === "" ||
      additionalquestion?.reference === ""
    ) {
        alert("Please select all responses........................")
    } else {
      navigate("/entereddetails");
    }
  };

  function setData() {
    localStorage.setItem(
      "additionalquestion",
      JSON.stringify(additionalquestion)
    );
  }

  useEffect(() => {
    setData();
  }, [additionalquestion]);

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body">
              <form>
                <label htmlFor="">
                  <h4>Additional Questions</h4>
                </label>
                <div className="form-group m-2">
                  <label htmlFor="q1">
                    <b>1.</b> What is your profession?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="student"
                    autoComplete="off"
                    className="m-2"
                    value="Student"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        profession: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="student"> Student</label> <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="sde"
                    autoComplete="off"
                    className="m-2"
                    value="Software Engineer"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        profession: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="sde"> Software Engineer</label> <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="teacher"
                    autoComplete="off"
                    className="m-2"
                    value="Teacher"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        profession: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="teacher"> Teacher</label> <br />
                  <hr />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="q2">
                    <b>2.</b> What are your interests?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dsa"
                    autoComplete="off"
                    className="m-2"
                    value="DSA"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        interests: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="dsa"> DSA</label> <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="fullstack"
                    autoComplete="off"
                    className="m-2"
                    value="Full Stack Development"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        interests: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="fullstack"> Full Stack Development</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dataScience"
                    autoComplete="off"
                    className="m-2"
                    value="Data Science"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        interests: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="dataScience"> Data Science</label> <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="compeProgramming"
                    autoComplete="off"
                    className="m-2"
                    value="Competitive Programming"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        interests: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="compeProgramming">
                    Competitive Programming
                  </label>
                  <br />
                  <hr />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="q3">
                    <b>3.</b> Where did you hear about us?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="news"
                    autoComplete="off"
                    className="m-2"
                    value="News Paper"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        reference: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="news"> News Paper</label> <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="LinkedIn"
                    autoComplete="off"
                    className="m-2"
                    value="LinkedIn"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        reference: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="LinkedIn"> LinkedIn</label> <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="Instagram"
                    autoComplete="off"
                    className="m-2"
                    value="Instagram"
                    onChange={(e) =>
                      setAdditionalQuestion({
                        ...additionalquestion,
                        reference: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="Instagram"> Instagram</label> <br />
                </div>
                <button
                  className="btn btn-success mx-3"
                  onClick={navToEnteredDetails}
                >
                  Next
                </button>
              </form>
              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge badge-pill bg-success">
                  <b>2</b>
                </span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalQuestion;
