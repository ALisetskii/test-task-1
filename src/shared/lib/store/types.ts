import { Saga, SagaIterator } from 'redux-saga';
import { SagaReturnType } from 'redux-saga/effects';

/** Частичное состояние стора */
export type PartialState<TModelName extends string, TModelState> = Record<
  TModelName,
  TModelState
>;

/** Сага с параметрами */
export type SagaWithParameters<TSaga extends Saga> = (
  ...args: Parameters<TSaga>
) => SagaIterator<SagaReturnType<TSaga>>;
