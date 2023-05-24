<template>
  <div>
    <div class="all-openings">
      <div class="job-board-category">
        <h2>Client Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet, conisectetur adipiscing eit, sted doa
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et dolore
          magna aliqua eiusmod el. Lorem ipsum dolor sit amet, conisectetur
          adipiscing eit, sted doa eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <div class="postings">
        <div class="single-posting">
          <h2>
            <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
              >Client Solutions Specialist</a
            >
            <span class="label label-part-time">Part Time</span>
          </h2>
          <h3>Grand Rapids, MI</h3>
          <div class="posting-detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
          </div>
          <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
            >View Posting</a
          >
        </div>
        <div class="single-posting">
          <h2>
            <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
              >Client Solutions Supervisor</a
            >
            <span class="label label-full-time">Full Time</span>
          </h2>
          <h3>Grand Rapids, MI</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
            >View Posting</a
          >
        </div>
      </div>

      <div class="border"></div>

      <div class="job-board-category">
        <h2>Information Technology</h2>
        <p>
          Lorem ipsum dolor sit amet, conisectetur adipiscing eit, sted doa
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et dolore
          magna aliqua eiusmod el. Lorem ipsum dolor sit amet, conisectetur
          adipiscing eit, sted doa eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <div class="postings">
        <div class="single-posting">
          <h2>
            <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
              >User Experience Designer</a
            >
            <span class="label label-full-time">Full Time</span>
          </h2>
          <h3>Grand Rapids, MI</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
            >View Posting</a
          >
        </div>
        <div class="single-posting">
          <h2>
            <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
              >User Interface Developer</a
            >
            <span class="label label-internship">Internship</span>
          </h2>
          <h3>Grand Rapids, MI</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <a href="https://www.google.com/?gws_rd=ssl" target="_blank"
            >View Posting</a
          >
        </div>
      </div>

      <div class="border"></div>

      <div class="talent-pool">
        <p>
          Lorem ipsum dolor sit amet, conisectetur adipiscing eit, sted doa
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et dolore
          magna aliqua eiusmod el. Lorem ipsum dolor sit amet, conisectetur
          adipiscing eit, sted.
        </p>
        <button>Join Our Talent Pool</button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
*{
  text-align: left;
}
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 36px;
  color: #333;
  line-height: 36px;
  display: block;
}

h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333;
  line-height: 24px;
  display: inline-block;
  margin: 0;
}

h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #999;
  line-height: 22px;
  display: inline-block;
  margin: 0;
}

p {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #333;
  line-height: 25px;
  display: inline-block;
  margin: 0;
}

a {
  color: #04d3c2;
  text-decoration: underline;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}

a:hover {
  color: #03968a;
}

h2 a {
  color: #333;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
}

h2 a:hover {
  color: #333;
}

.label {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #fff;
}

/* Demo-Specific CSS */

button {
  background: #04d3c2;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 30px;
  padding: 0px 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background: #03968a;
}

body {
  background: #f2f2f2;
  margin: 0;
}

header {
  background: #fff;
  width: 100%;
  padding-bottom: 25px;
}

button {
  float: right;
  display: inline-block;
  margin-top: 15px;
  margin-right: 15px;
}

.label {
  padding: 0px 5px;
  margin-left: 10px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin: 0 0 0 5px;
}

.label-part-time {
  background: #fbb03b;
}

.label-full-time {
  background: #239e9a;
}

.label-internship {
  background: #00aeef;
}

.client-job-board-title {
  padding-left: 20px;
  padding-top: 15px;
  color: #333;
  font-weight: 300;
}

.centered-title {
  text-align: center;
  margin-bottom: 15px;
}

.centered-subtext {
  text-align: center;
  display: block;
}

.all-openings {
  width: 75%;
  min-width: 800px;
  max-width: 1220px;
  background: #fff;
  margin: 15px auto;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  padding: 50px 100px;
}

.single-posting {
  display: block;
  margin-bottom: 25px;
}

.job-board-category {
  width: 30%;
  float: left;
  text-align: right;
  padding-right: 40px;
  display: inline-block;
}

.job-board-category h2 {
  text-transform: uppercase;
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
}

.job-board-category p {
  font-style: italic;
  color: #999999;
  margin: 0;
}

.postings {
  width: 65%;
  float: left;
}

.postings h2 {
  margin-bottom: 0;
}

.postings h3 {
  margin: 0 0 10px 0;
  display: block;
}

.postings p {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
  width: 100%;
}

.talent-pool {
  text-align: center;
  margin: 0 auto;
  width: 600px;
  float: none;
}

.talent-pool h2 {
  margin: 0 0 25px 0;
}

.talent-pool button {
  margin: 25px auto;
  float: none;
}

.border {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 15px;
  margin-bottom: 40px;
  float: left;
}

footer {
  margin: 25px auto;
  text-align: center;
}

footer img {
  margin: 10px auto;
  padding-bottom: 25px;
  height: 40px;
  width: auto;
  display: block;
}
</style>