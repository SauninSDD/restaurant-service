package ru.sber.services;

import ru.sber.entities.Dish;

import java.util.List;
import java.util.Optional;

/**
 * Сервис для взаимодействия с {@link Dish блюдами}
 */
public interface DishService {

    /**
     * Получает все блюда в филиале
     *
     * @return List<Dish>
     */
    List<Dish> getListDish();

    /**
     * Добавляет блюдо
     *
     * @param dish блюдо
     * @return boolean
     */
    long addDish(Dish dish);

    /**
     * Добавляет блюдо по имени
     *
     * @param name имя блюдо
     * @return boolean
     */
    boolean addDishByName(String name);

    /**
     * Получает все блюда
     *
     * @return List<Dish>
     */
    List<Dish> getListAllDish();

    /**
     * Удаляет блюдо
     *
     * @param id id блюда
     * @return boolean
     */
    boolean deleteDish(long id);

    /**
     * Обновляет блюдо
     *
     * @param dish блюдо
     * @return boolean
     */
    boolean updateDish(Dish dish);

    /**
     * Получает блюдо по id
     *
     * @param id id блюда
     * @return Optional<Dish>
     */
    Optional<Dish> getDishById(long id);
}
