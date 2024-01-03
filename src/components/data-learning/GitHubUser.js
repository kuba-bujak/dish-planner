import React, { useEffect, useState } from "react";
import { useFetch, useInput } from "../../hooks/hooks";
import { RepoMenu } from "./RepoMenu";
import RepositoryReadme from "./RepositoryReadme";
import { GraphQLClient } from "graphql-request";

const query = `
	query findRepos($login:String!) {
		user(login:$login) {
			login
			name
			location
			avatar_url: avatarUrl
			repositories(first:100) {
				totalCount
				nodes {
					name
				}
			}
		}
	}
`;

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer <YOUR_OWN_PRIVATE_TOKEN>`,
  },
});

client
  .request(query, { login: "kuba-bujak" })
  .then((results) => JSON.stringify(results, null, 2))
  .then(console.log)
  .catch(console.error);

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderError={(error) => {
        return <p>Wystąpił błąd... {error.message}</p>;
      }}
      renderSuccess={UserDetails}
    />
  );
}

function UserRepos({ login, selectedRepo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          selectedRepo={selectedRepo}
          login={login}
          onSelect={onSelect}
        />
      )}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function SearchForm({ value, onSearch }) {
  const [titleProps, resetTitle] = useInput("");
  const submit = (e) => {
    e.preventDefault();
    onSearch(titleProps.value);
    resetTitle();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="Nazwa użytkownika"
        required
      />
    </form>
  );
}

function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>Wczytywanie</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError;
  if (data) return renderSuccess({ data });
}

export default function UserManager() {
  // ----------------- Classic Version ----------------- //

  const [login, setLogin] = useState("kuba-bujak");
  const [repo, setRepo] = useState("My-Portfolio");

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  if (!login) return <SearchForm value={login} onSearch={handleSearch} />;

  return (
    <div>
      <h1>User Manager</h1>
      <SearchForm value={login} onSearch={handleSearch} />
      {login && <GitHubUser login={login} />}
      {login && <UserRepos login={login} repo={repo} onSelect={setRepo} />}
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </div>
  );

  // ----------------- GraphQL Version ----------------- //

  // const [login, setLogin] = useState("kuba-bujak");
  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //   client
  //     .request(query, { login })
  //     .then(({ user }) => user)
  //     .then(setUserData)
  //     .catch(console.error);
  // }, [client, query, login]);

  // if (!userData) return <p>Wczytywanie...</p>;

  // return (
  //   <>
  //     <SearchForm value={login} onSearch={setLogin} />
  //     <UserDetails {...userData} />
  //     <p>{userData.repositories.totalCount} - repos</p>
  //     {/* TODO: Create List component */}
  //     <List
  //       data={userData.repositories.nodes}
  //       renderItem={(repo) => <span>{repo.name}</span>}
  //     />
  //   </>
  // );
}
