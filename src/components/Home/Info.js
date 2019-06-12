import React from "react"
import { Link } from "gatsby"
import Title from "../Global/Title"
import Titel from "../Global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Titel title="our funiturs" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis eos dolorum fugit quam harum, tempora magni, earum
              cupiditate quis esse nostrum, perferendis delectus dolorem. Omnis
              sunt ut delectus obcaecati voluptatum, quo distinctio vel est
              quidem sapiente porro aliquid quis ipsam nulla ea corrupti sint
              natus consequatur earum sequi quos vitae.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-green">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
