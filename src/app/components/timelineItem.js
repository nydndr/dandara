export default function TimelineItem({ children }) {
  return (
    <div className="grid grid-cols-3 font-manrope gap-8">
      <div className="col-span-1 text-right space-y-4">
        <div className="font-anton text-3xl uppercase">
          <p>{children.title}</p>
          <p>{children.period}</p>
        </div>

        <p className="font-medium">{children.description}</p>
      </div>

      <div className="col-span-2 px-8 py-8 space-y-6 bg-blue-900 font-bold tracking-tight text-xl text-white">
        {children.points.map((item, array) => {
          <p className="text-base"> {item.subtitle} </p>;

          {
            item.items.map((item, array) => {
              (<div className="grid grid-cols-2 gap-10">
                (
                <div className="space-y-4">
                  <p>{item.title}</p>
                  <p>{item.description}</p>

                  <button className="border border-white rounded-full px-4 py-2 text-sm font-normal hover:bg-white hover:text-black transition-colors">
                    {item.link} {"->"}
                  </button>
                </div>
                )
                <div className="space-y-4">
                  <p>Serase</p>
                  <p>
                    Aplicativo de gerenciamento financeiro para adultos de baixa
                    renda. Programado em React Native como Trabalho de Conclusão
                    do Curso
                  </p>
                </div>
              </div>)(<></>);
            });
          }
        })}
      </div>
    </div>
  );
}
