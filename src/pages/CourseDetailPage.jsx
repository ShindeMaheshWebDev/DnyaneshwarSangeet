import React from "react";
import { useParams } from "react-router-dom";

import {
  Clock3,
  Users,
  Award,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

import { courses } from "../data/coursesData";

const CourseDetailPage = () => {
  const { slug } = useParams();

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <img
          src={course.heroImage}
          alt={course.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/70
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            py-28
          "
        >
          <Link
            to="/courses"
            className="
              inline-flex
              items-center
              gap-2
              text-yellow-300
            "
          >
            <ArrowLeft size={16} />
            Back To Courses
          </Link>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              md:text-7xl
            "
          >
            {course.title}
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              text-zinc-300
            "
          >
            {course.shortDescription}
          </p>
        </div>
      </section>

      {/* INFO */}

      <section
        className="
          px-5
          py-20
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-[26px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
              "
            >
              <Clock3 className="text-yellow-300" />

              <h3 className="mt-4 font-bold">
                Duration
              </h3>

              <p className="mt-2 text-zinc-400">
                {course.duration}
              </p>
            </div>

            <div
              className="
                rounded-[26px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
              "
            >
              <Users className="text-yellow-300" />

              <h3 className="mt-4 font-bold">
                Students
              </h3>

              <p className="mt-2 text-zinc-400">
                {course.students}
              </p>
            </div>

            <div
              className="
                rounded-[26px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
              "
            >
              <Award className="text-yellow-300" />

              <h3 className="mt-4 font-bold">
                Level
              </h3>

              <p className="mt-2 text-zinc-400">
                {course.level}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}

      <section
        className="
          px-5
          pb-20
        "
      >
        <div className="mx-auto max-w-7xl">

          <h2
            className="
              text-4xl
              font-black
            "
          >
            Course Overview
          </h2>

          <p
            className="
              mt-6
              max-w-4xl
              leading-8
              text-zinc-400
            "
          >
            {course.overview}
          </p>

        </div>
      </section>

      {/* BENEFITS */}

      <section
        className="
          px-5
          pb-20
        "
      >
        <div className="mx-auto max-w-7xl">

          <h2
            className="
              text-4xl
              font-black
            "
          >
            What You Will Learn
          </h2>

          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {course.benefits.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-yellow-300"
                />

                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SYLLABUS */}

      <section
        className="
          px-5
          pb-24
        "
      >
        <div className="mx-auto max-w-7xl">

          <h2
            className="
              text-4xl
              font-black
            "
          >
            Course Syllabus
          </h2>

          <div className="mt-10 space-y-4">
            {course.syllabus.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                "
              >
                Module {index + 1} • {item}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default CourseDetailPage;