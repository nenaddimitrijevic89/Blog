import React, { useEffect, useState } from "react";
import { Container } from "react-materialize";
import style from "./Authors.module.css";
import { AuthorInfo } from "./AuthorComponents/AuthorInfo";
import { AuthorAddress } from "./AuthorComponents/AuthorAddress";
import { Header } from "../Header/Header";
import { AuthorCompany } from "./AuthorComponents/AuthorCompany";
import { authorsService } from "../../services/authorsService";
import { Loader } from "../Loader/Loader";

const SingleAuthor = () => {
  const [singleAuthor, setSingleAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    authorsService
      .getSingleAuthor(this.props.match.params.id)
      .then((data) => {
        setSingleAuthor(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const renderInfo = () => (
    <>
      <AuthorInfo
        name={singleAuthor.name}
        id={singleAuthor.id}
        username={singleAuthor.username}
        website={singleAuthor.website}
        phone={singleAuthor.phone}
        email={singleAuthor.email}
      />
      <AuthorAddress
        street={singleAuthor.address.street}
        lat={singleAuthor.address.lat}
        lng={singleAuthor.address.lng}
        city={singleAuthor.address.city}
        zipcode={singleAuthor.address.zipcode}
      />
      <AuthorCompany
        name={singleAuthor.company.name}
        activity={singleAuthor.company.bs}
      />
    </>
  );

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h4 className={style.title}>Single Author</h4>
          {singleAuthor && renderInfo()}
        </Container>
      )}
    </div>
  );
};

export { SingleAuthor };
