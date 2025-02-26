import TransitionPage from "./transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionPage>
        {children}
      </TransitionPage>
    </>

  );
}