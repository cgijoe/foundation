import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
  SaveOptions,
} from "typeorm";

export abstract class EntityRepository<T extends ObjectLiteral> {
  constructor(protected readonly entityRepository: Repository<T>) {}

  create(
    createEntityData: DeepPartial<T>,
    options?: SaveOptions & { reload: false }
  ) {
    return this.entityRepository.save(createEntityData, options);
  }

  findOne(options: FindOneOptions<T>) {
    return this.entityRepository.findOne(options);
  }

  find(options: FindManyOptions<T>) {
    return this.entityRepository.find(options);
  }

  update(criteria: FindOptionsWhere<T>, partialEntity: DeepPartial<T>) {
    return this.entityRepository.update(criteria, partialEntity);
  }

  delete(criteria: FindOptionsWhere<T>) {
    return this.entityRepository.delete(criteria);
  }
}
