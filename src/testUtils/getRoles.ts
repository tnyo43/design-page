import { getRoles as getRolesRaw } from '@testing-library/dom';

const ignoreRoles = ['generic', 'presentation'];

export const getRoles = (
  container: HTMLElement
): { role: string; element: HTMLElement }[] => {
  const roles = getRolesRaw(container);
  const keys = Object.keys(roles).filter((role) => !ignoreRoles.includes(role));
  return keys.reduce(
    (acc, role) =>
      acc.concat(roles[role].map((element) => ({ role, element }))),
    [] as { role: string; element: HTMLElement }[]
  );
};
