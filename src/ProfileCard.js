//props to give child component data

function ProfileCard({ title, handle, img }) {
  // props variable
  // const title = props.title
  // const handle = props.handle

  //smaller way to write props variable
  // const {title, handle} = props

  // img element is called img=src

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4"> {title}</p>
          <p className="subtitle is-6"> {handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
