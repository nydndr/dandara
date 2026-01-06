import Image from "next/image";
import Link from "next/link";

export default function POSGallery() {
  return (
    <section className="gallery">
      <div className="gallery-item-with-two rounded-md border-1 border-gray-700/20">
        <Image
          src="/work/apps/launcher_mamba.png"
          width={343}
          height={590}
          alt="Mamba launcher"
        ></Image>
        <Image
          src="/work/apps/campanha_android.png"
          width={352}
          height={604}
          alt="Campaign app on Android POS"
        ></Image>

        <p className="text-lg font-bold tracking-tight text-stone-700/20 md:w-4/5 md:text-2xl">
          Home Experience
        </p>
      </div>

      <div className="gallery-item-with-two rounded-md border-1 border-gray-700/20">
        <Image
          src="/work/apps/ajuda_android.png"
          width={352}
          height={604}
          alt="Help app on Android POS"
        ></Image>
        <Image
          src="/work/apps/ajustes_mamba.png"
          width={343}
          height={590}
          alt="Help app on Mamba POS"
        ></Image>
        <p className="text-lg font-bold tracking-tight text-stone-700/20 md:w-4/5 md:text-2xl">
          Systems Apps
        </p>
      </div>

      <div className="gallery-item-with-two rounded-md border-1 border-gray-700/20">
        <Image
          src="/work/apps/ativacao_mamba.png"
          width={343}
          height={590}
          alt="Activation for Mamba POS"
        ></Image>
        <Image
          src="/work/apps/bobinas_android.png"
          width={352}
          height={604}
          alt="Supplies app on Android POS"
        ></Image>

        <p className="text-lg font-bold tracking-tight text-stone-700/20 md:w-4/5 md:text-2xl">
          Service Apps
        </p>
      </div>

      <div className="gallery-item-with-two rounded-md border-1 border-gray-700/20">
        <Image
          src="/work/apps/pagamento_android.png"
          width={352}
          height={604}
          alt="Payments App on Android POS"
        ></Image>
        <Image
          src="/work/apps/cancelamento_mamba.png"
          width={343}
          height={590}
          alt="Cancellation App on Mamba POS"
        ></Image>
        <p className="text-lg font-bold tracking-tight text-stone-700/20 md:w-4/5 md:text-2xl">
          Payments Apps
        </p>
      </div>

      <div className="gallery-item-with-two rounded-md border-1 border-gray-700/20">
        <Image
          src="/work/apps/reimpressao_mamba.png"
          width={343}
          height={590}
          alt="Ticket Reprint on Mamba POS"
        ></Image>
        <Image
          src="/work/apps/relatorio_android.png"
          width={352}
          height={604}
          alt="Report App on Android POS"
        ></Image>

        <p className="text-lg font-bold tracking-tight text-stone-700/20 md:w-4/5 md:text-2xl">
          Managament Apps
        </p>
      </div>

      <Link
        href="https://www.stone.com.br/"
        className="flex min-h-40 items-center justify-center rounded-md border-1 border-dashed border-gray-700/20 bg-gray-200/20 hover:border-solid"
      >
        <span className="flex gap-1">
          <span className="inline-flex size-2 animate-bounce rounded-full bg-stone-700/70"></span>
          <span className="inline-flex size-2 animate-bounce rounded-full bg-stone-700/70"></span>
          <span className="inline-flex size-2 animate-bounce rounded-full bg-stone-700/70"></span>
        </span>

        <p className="right-arrow w-1/2 text-center font-bold tracking-tight text-stone-700/70">
          And many more <br></br> apps and features
        </p>
      </Link>
    </section>
  );
}
