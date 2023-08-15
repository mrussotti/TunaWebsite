import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./navbar.module.css"; // Import the new CSS file
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit'

const rdt = RadixDappToolkit({
  dAppDefinitionAddress:
    'account_tdx_d_12xjtdhuzjluel8p03vw35thc3d08w0da8ujde2dpcplg6tyfcnc943',
  networkId: 13,
})

export default function Navbar() {
  return (
    <>
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Bigger Tuna Crypto
      </Link>
      <radix-connect-button />

    </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} className={styles.btn} {...props}>
        {children}
      </Link>
    </li>
  );
}
