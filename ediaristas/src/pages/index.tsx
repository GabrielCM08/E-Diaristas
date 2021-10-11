import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironmente";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Gabriel"}
        picture={"https://github.com/GabrielCM08.png/"}
        rating={3}
        description={"Rio Grande do Sul"}
      />

      <UserInformation
        name={"Najulinha"}
        picture={""}
        rating={5}
        description={"Rio Grande do Sul"}
      />
    </div>
  );
};

export default Home;
