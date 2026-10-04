import { useLaunchMyNFT } from "../hooks/useLaunchMyNFT";

/**
 * The real mint UI. `useLaunchMyNFT` injects the LaunchMyNFT snippet at
 * runtime; this component only renders the two container divs the widget
 * mounts into. Container ids are contract — don't rename them.
 */
export function MintWidget() {
  useLaunchMyNFT();

  return (
    <div className="w-full space-y-5">
      <div id="mint-counter" className="flex justify-center" />
      <div id="mint-button-container" className="flex min-h-[64px] items-center justify-center" />
    </div>
  );
}
