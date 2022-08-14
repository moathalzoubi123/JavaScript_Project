import React, { useState } from "react";
import styled from "styled-components";
import { postFeedback } from "./LingozillaService";
import { FaStar } from "react-icons/fa";
import "./FeedbackStarRating.css";

const Form = styled.form`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  background: #c996cc;
  padding: 20px;
  margin-bottom: 40px;
  border: 10px solid #ccc;
  border-radius: 25px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const Select = styled.select`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const SubmitButton = styled.input`
  & {
    display: block;
    margin: 20px auto;
    background: #9d7bf4;
    color: #ffffff;
    font-size: 18px;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-in-out;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

const FeedBackForm = ({ addFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    ageGroup: "",
    rating: "",
    feedback: "",
    date: "",
  });

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    postFeedback(formData).then((data) => {
      addFeedback(data);
    });
    alert("Thanks for your feedback!");
    setFormData({
      name: "",
      ageGroup: "",
      rating: "",
      feedback: "",
      date: "",
    });
  };

  const onChange = (event) => {
    const newFormData = Object.assign({}, formData);
    console.log(event.target.value);
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };

  const onRatingChange = (starRating) => {
    const newFormData = Object.assign({}, formData);
    newFormData.rating = starRating;
    setFormData(newFormData);
  };

  return (
    <div className="FeedBackForm">
      <Form onSubmit={handleSubmit} id="feedback-Form">
        <h2>We'd love to hear some feedback about your lesson!</h2>
        <div className="wrapper">
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            value={formData.name}
          />
        </div>
        <div className="wrapper">
          <Label htmlFor="ageGroup">Age Group</Label>
          <Select onChange={onChange} name="ageGroup" id="ageGroup">
            <option
              value="under5"
              selected={formData.ageGroup === "" ? "selected" : ""}
            >
            </option>
            <option value="0-5">Under 5 years old</option>
            <option value="5-14">5 - 14 years old</option>
            <option value="15-24">15 - 24 years old</option>
            <option value="25-54">25 - 54 years old</option>
            <option value="55+">55+ years old</option>
          </Select>
        </div>
        <div className="wrapper">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                    onRatingChange(ratingValue);
                  }}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#FFC107" : "E4E5E9"
                  }
                  size={100}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setRating(null)}
                />
              </label>
            );
          })}
          {/* <Label htmlFor="rating">Rating</Label>
          <input
            onChange={onChange}
            type="radio"
            id="1-star"
            name="rating"
            value="1-star"
            checked={formData.rating === "1-star"}
          />
          <label htmlFor="1-star">1 Star</label>
          <input
            onChange={onChange}
            type="radio"
            id="2-stars"
            name="rating"
            value="2-stars"
            checked={formData.rating === "2-stars"}
          />
          <label htmlFor="2-stars">2 Stars</label>
          <input
            onChange={onChange}
            type="radio"
            id="3-stars"
            name="rating"
            value="3-stars"
            checked={formData.rating === "3-stars"}
          />
          <label htmlFor="3-stars">3 Stars</label>
          <input
            onChange={onChange}
            type="radio"
            id="4-stars"
            name="rating"
            value="4-stars"
            checked={formData.rating === "4-stars"}
          />
          <label htmlFor="4-stars">4 Stars</label>
          <input
            onChange={onChange}
            type="radio"
            id="5-stars"
            name="rating"
            value="5-stars"
            checked={formData.rating === "5-stars"}
          />
          <label htmlFor="5-stars">5 Stars</label> */}
        </div>
        <div className="wrapper">
          <Label htmlFor="feedback">Feedback</Label>
          <TextArea
            onChange={onChange}
            type="text"
            id="feedback"
            name="feedback"
            value={formData.feedback}
            rows="4"
            cols="50"
          />
        </div>
        <div className="wrapper">
          <Label htmlFor="date">Date</Label>
          <Input
            onChange={onChange}
            type="date"
            id="date"
            name="date"
            value={formData.date}
          />
        </div>
        <SubmitButton type="submit" value="Submit" id="submit" />
      </Form>
    </div>
  );
};

export default FeedBackForm;
