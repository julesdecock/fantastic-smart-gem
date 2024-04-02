import SmartTable from "sap/ui/comp/smarttable/SmartTable";

export function buildMeATable(config: {
  entitySet: string;
  initiallyVisibleFields: string;
  requestAtLeastFields: string;
  enableAutoBinding: boolean;
}): SmartTable {
  return new SmartTable({
    entitySet: config.entitySet,
    initiallyVisibleFields: config.initiallyVisibleFields,
    requestAtLeastFields: config.requestAtLeastFields,
    enableAutoBinding: config.enableAutoBinding,
  });
}
